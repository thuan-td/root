import { format, formatDistanceToNow } from 'date-fns';
import { ja } from 'date-fns/locale';
import { toZonedTime } from 'date-fns-tz';

const TOKYO_TIMEZONE = 'Asia/Tokyo';

export function formatDate(date: Date | string, formatStr = 'PPP'): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const zonedDate = toZonedTime(dateObj, TOKYO_TIMEZONE);

  return format(zonedDate, formatStr, { locale: ja });
}

export function formatDateTime(
  date: Date | string,
  formatStr = 'PPP p',
): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const zonedDate = toZonedTime(dateObj, TOKYO_TIMEZONE);

  return format(zonedDate, formatStr, { locale: ja });
}

export function formatRelativeTime(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;

  return formatDistanceToNow(dateObj, {
    addSuffix: true,
    locale: ja,
  });
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('ja-JP', {
    style: 'currency',
    currency: 'JPY',
  }).format(price);
}
