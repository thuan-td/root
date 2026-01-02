import ForgotPassword from '@/features/public/auth/components/ForgotPassword';

export const metadata = {
  title: 'パスワード再設定 | Root Storage',
  description:
    'メールアドレスまたは電話番号を使用してパスワードを再設定します。',
};

export default function ForgotPasswordPage() {
  return <ForgotPassword />;
}
