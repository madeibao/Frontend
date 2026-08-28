// ✅ 多个独立工具用命名导出
export function formatDate(date: string): string {
    return new Date(date).toLocaleDateString('zh-CN');
}

export function formatCurrency(amount: number): string {
    return `¥${amount.toFixed(2)}`;
}

export const MAX_PAGE_SIZE = 20;