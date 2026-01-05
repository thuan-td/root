'use client';

import { FormButton } from '@/components/common/FormButton';
import type { ProfileConfirmationData } from '../types/profile.types';

interface ProfileConfirmationProps {
  data: ProfileConfirmationData;
  onBack: () => void;
  onConfirm: () => void;
  isSubmitting?: boolean;
}

interface ConfirmationRowProps {
  label: string;
  value: string | React.ReactNode;
  isEmail?: boolean;
}

function ConfirmationRow({
  label,
  value,
  isEmail = false,
}: ConfirmationRowProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 py-6 border-b border-gray-200 dark:border-gray-700 items-center">
      <div
        className={`sm:col-span-3 text-gray-500 dark:text-gray-400 font-medium ${isEmail ? 'text-gray-800 dark:text-white font-bold' : ''}`}
      >
        {label}
      </div>
      <div className="sm:col-span-9 text-gray-800 dark:text-white text-lg break-all">
        {value}
      </div>
    </div>
  );
}

export default function ProfileConfirmation({
  data,
  onBack,
  onConfirm,
  isSubmitting = false,
}: ProfileConfirmationProps) {
  const phoneDisplay = (
    <div className="flex items-center gap-2">
      <span>{data.phone.split(' - ')[0]}</span>
      <span className="text-gray-400">−</span>
      <span>{data.phone.split(' - ')[1]}</span>
      <span className="text-gray-400">−</span>
      <span>{data.phone.split(' - ')[2]}</span>
    </div>
  );

  return (
    <div className="w-full max-w-4xl px-4">
      <div className="bg-white dark:bg-surface-dark rounded-[2rem] shadow-card p-8 sm:p-12 md:py-16 md:px-20 border border-gray-200 dark:border-gray-700">
        <h1 className="text-center text-xl sm:text-2xl font-bold mb-12 text-gray-800 dark:text-white">
          入力内容をご確認ください。
        </h1>

        <div className="space-y-0">
          <ConfirmationRow label="姓：" value={data.lastName} />
          <ConfirmationRow label="名：" value={data.firstName} />
          <ConfirmationRow label="セイ：" value={data.lastNameKana} />
          <ConfirmationRow label="メイ：" value={data.firstNameKana} />
          <ConfirmationRow label="電話番号：" value={phoneDisplay} />
          <ConfirmationRow
            label="メールアドレス："
            value={data.email}
            isEmail
          />
        </div>

        <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-6">
          {/* Back Button */}
          <FormButton
            variant="primary"
            onClick={onBack}
            disabled={isSubmitting}
            type="button"
            className="relative group"
          >
            <span className="absolute left-4 w-4 h-4 bg-white rounded-full flex items-center justify-center text-button-danger">
              <span className="material-icons-outlined !text-[15px]">
                chevron_left
              </span>
            </span>
            <span>入力画面に戻る</span>
          </FormButton>

          {/* Confirm Button */}
          <FormButton
            variant="danger"
            onClick={onConfirm}
            loading={isSubmitting}
            disabled={isSubmitting}
            type="button"
            className="relative group"
          >
            <span>{isSubmitting ? '更新中...' : '変更完了画面へ'}</span>
            {!isSubmitting && (
              <span className="absolute right-4 w-4 h-4 bg-white rounded-full flex items-center justify-center text-button-danger">
                <span className="material-icons-outlined !text-[15px]">
                  chevron_right
                </span>
              </span>
            )}
          </FormButton>
        </div>
      </div>
    </div>
  );
}
