// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const options: any = { year: 'numeric', month: 'long', day: 'numeric' };

export const turnicatetext = (maxLength: number, text: string) => {
  const truncatedText =
    text.length > maxLength ? text.slice(0, maxLength) + '...' : text;

  return truncatedText;
};
