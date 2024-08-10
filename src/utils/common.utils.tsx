import SimplePlaceholder from "../components/global/SimplePlaceholder/SimplePlaceholder";

export const asyncDelay = (time: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

export const renderPlaceholders = (length: number) => {
  const temporal = length ? length : 5;
  return Array.from({ length: temporal }).map((_, index) => (
    <SimplePlaceholder key={index} />
  ));
};
