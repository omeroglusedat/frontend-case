export const useRouter = () => ({
  replace: jest.fn(),
});

export const useSearchParams = () => ({
  get: (key: string) => '',
  toString: () => '',
});