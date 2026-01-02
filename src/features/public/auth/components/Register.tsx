'use client';

import { useState, useEffect } from 'react';
import {
  useSendVerificationCode,
  useRegister,
} from '@/features/public/auth/hooks/useRegister';
import Breadcrumb from '@/components/common/Breadcrumb';
import RegisterStep1 from './register/RegisterStep1';
import RegisterStep2 from './register/RegisterStep2';
import RegisterStep3 from './register/RegisterStep3';
import RegisterStep4 from './register/RegisterStep4';
import RegisterProgressSteps from './register/RegisterProgressSteps';

interface RegisterFormData {
  email: string;
  verificationCode?: string;
  // Step 2 fields
  lastName: string;
  firstName: string;
  lastNameKana: string;
  firstNameKana: string;
  phoneNumber1: string;
  phoneNumber2: string;
  phoneNumber3: string;
  password: string;
  agreeToTerms: boolean;
}

interface ValidationErrors {
  [key: string]: string;
}

export default function Register() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<RegisterFormData>({
    email: '',
    lastName: '',
    firstName: '',
    lastNameKana: '',
    firstNameKana: '',
    phoneNumber1: '',
    phoneNumber2: '',
    phoneNumber3: '',
    password: '',
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState<ValidationErrors>({});

  const { mutate: sendCode, isPending: isSendingCode } =
    useSendVerificationCode();
  const {
    mutate: register,
    isPending: isRegistering,
    error: registerError,
  } = useRegister();

  // Check if user came back from privacy policy with agreement
  useEffect(() => {
    const privacyAgreed = sessionStorage.getItem('privacyPolicyAgreed');
    const termsAgreed = sessionStorage.getItem('termsAgreed');
    const savedFormDataJson = sessionStorage.getItem('registerFormData');

    if (
      privacyAgreed === 'true' &&
      termsAgreed === 'true' &&
      savedFormDataJson
    ) {
      try {
        // Restore the entire form data that was saved
        const savedFormData = JSON.parse(savedFormDataJson);
        setFormData(prev => ({
          ...prev,
          ...savedFormData,
          agreeToTerms: true,
        }));
        // Move to step 2
        setCurrentStep(2);
      } catch (error) {
        console.error('Failed to restore form data:', error);
      }
      // Clear the session storage flags
      sessionStorage.removeItem('privacyPolicyAgreed');
      sessionStorage.removeItem('termsAgreed');
      sessionStorage.removeItem('registerFormData');
    }
  }, []);

  const steps = [
    { number: 1, label: 'メールアドレスの入力' },
    { number: 2, label: '会員情報の入力' },
    { number: 3, label: '入力内容の確認' },
    { number: 4, label: '会員登録の完了' },
  ];

  const validateStep2 = (): boolean => {
    const newErrors: ValidationErrors = {};

    if (!formData.lastName.trim()) {
      newErrors.lastName = '姓を入力してください';
    }

    if (!formData.firstName.trim()) {
      newErrors.firstName = '名を入力してください';
    }

    if (!formData.lastNameKana.trim()) {
      newErrors.lastNameKana = 'セイを入力してください';
    }

    if (!formData.firstNameKana.trim()) {
      newErrors.firstNameKana = 'メイを入力してください';
    }

    if (
      !formData.phoneNumber1.trim() ||
      !formData.phoneNumber2.trim() ||
      !formData.phoneNumber3.trim()
    ) {
      newErrors.phoneNumber = '電話番号を入力してください';
    }

    if (!formData.password) {
      newErrors.password = 'パスワードを入力してください';
    } else if (formData.password.length < 8) {
      newErrors.password = 'パスワードは8文字以上で入力してください';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password =
        '小文字、大文字、数字を含む8文字以上で入力してください';
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms =
        '利用規約とプライバシーポリシーに同意してください';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleStep2Submit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateStep2()) {
      setCurrentStep(3);
    }
  };

  const handleFinalSubmit = () => {
    const phoneNumber = `${formData.phoneNumber1}-${formData.phoneNumber2}-${formData.phoneNumber3}`;

    const registrationData = {
      email: formData.email,
      lastName: formData.lastName,
      firstName: formData.firstName,
      lastNameKana: formData.lastNameKana,
      firstNameKana: formData.firstNameKana,
      phoneNumber,
      password: formData.password,
      agreeToTerms: formData.agreeToTerms,
    };
    setCurrentStep(4); //TODO REMOVE
    register(registrationData, {
      onSuccess: () => {
        setCurrentStep(4);
      },
    });
  };

  const handleBackToStep2 = () => {
    setCurrentStep(2);
  };

  const handleSendVerificationCode = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email.trim()) {
      setErrors({ email: 'メールアドレスを入力してください' });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrors({ email: '有効なメールアドレスを入力してください' });
      return;
    }

    // Store form data in sessionStorage for privacy policy redirect
    sessionStorage.setItem('registerFormData', JSON.stringify(formData));
    setCurrentStep(2); //TODO REMOVE

    sendCode(
      { email: formData.email },
      {
        onSuccess: () => {
          setCurrentStep(2);
        },
      },
    );
  };

  const handleSocialRegister = (provider: string) => {
    console.log('Register with:', provider);
  };

  const handleInputChange = (
    field: keyof RegisterFormData,
    value: string | boolean,
  ) => {
    setFormData(prev => {
      const updated = { ...prev, [field]: value };
      // Save form data to sessionStorage for privacy policy redirect
      sessionStorage.setItem('registerFormData', JSON.stringify(updated));
      return updated;
    });

    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  // Wrapper for RegisterStep2 compatibility
  const handleInputChangeStep2 = (field: string, value: string | boolean) => {
    handleInputChange(field as keyof RegisterFormData, value);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark min-h-screen flex flex-col">
      <Breadcrumb
        items={
          currentStep === 1
            ? [{ label: 'ホーム', href: '/' }, { label: '会員登録' }]
            : currentStep === 2 || currentStep === 3
              ? [
                  { label: 'ホーム', href: '/' },
                  { label: '会員登録', href: '/register' },
                  { label: '会員情報の入力' },
                ]
              : [
                  { label: 'ホーム', href: '/' },
                  { label: '会員登録', href: '/register' },
                  { label: '会員登録の完了' },
                ]
        }
      />

      {/* Main Content */}
      <main className="w-full max-w-5xl mx-auto px-4 py-10">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          {currentStep === 1 ? '会員登録' : '会員情報の入力'}
        </h1>

        {/* Progress Steps */}
        <RegisterProgressSteps steps={steps} currentStep={currentStep} />

        {/* Step 1: Email Verification */}
        {currentStep === 1 && (
          <RegisterStep1
            email={formData.email}
            error={errors.email}
            isPending={isSendingCode}
            onEmailChange={value => handleInputChange('email', value)}
            onSubmit={handleSendVerificationCode}
            onSocialRegister={handleSocialRegister}
          />
        )}

        {/* Step 2: Member Information Input */}
        {currentStep === 2 && (
          <RegisterStep2
            formData={formData}
            errors={errors}
            onInputChange={handleInputChangeStep2}
            onSubmit={handleStep2Submit}
          />
        )}

        {/* Step 3: Confirmation */}
        {currentStep === 3 && (
          <RegisterStep3
            formData={formData}
            isRegistering={isRegistering}
            registerError={registerError}
            onBack={handleBackToStep2}
            onSubmit={handleFinalSubmit}
          />
        )}

        {/* Step 4: Complete */}
        {currentStep === 4 && <RegisterStep4 />}
      </main>

      <div className="h-20"></div>
    </div>
  );
}
