'use client';

import { FormButton } from '@/components/common/FormButton';

interface ProfileCompleteProps {
  userName?: string;
}

export default function ProfileComplete({}: ProfileCompleteProps) {
  return (
    <div className="w-full max-w-4xl px-4">
      <div className="bg-white dark:bg-surface-dark rounded-[2rem] shadow-card p-8 sm:p-12 md:py-16 md:px-20 border border-gray-200 dark:border-gray-700">
        {/* Title */}
        <h1 className="text-center text-xl sm:text-2xl font-bold mb-6 text-gray-800 dark:text-white">
          会員情報の変更が完了しました。
        </h1>

        {/* Message */}
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
          引き続きルートが取扱う物件情報やお知らせなど、
          <br />
          便利な情報をご活用ください。
        </p>

        {/* Action Buttons */}
        <div className="flex justify-center items-center gap-6">
          <FormButton variant="danger" type="button" className="relative group">
            <span>マイページトップへ</span>

            <span className="absolute right-4 w-4 h-4 bg-white rounded-full flex items-center justify-center text-button-danger">
              <span className="material-icons-outlined !text-[15px]">
                chevron_right
              </span>
            </span>
          </FormButton>
        </div>
      </div>
    </div>
  );
}
