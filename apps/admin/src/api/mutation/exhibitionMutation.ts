import { useMutation } from '@tanstack/react-query';

import { registerExhibition } from '@api/exhibition';

type ExhibitionRegisterMutationProps = {
  exhibitionType: string;
  exhibitTitle: string;
  onSuccess: () => void;
  onError: (error: unknown) => void;
};

const EXHIBITION_MUTATION_KEY = {
  register: (exhibitionType: string, exhibitTitle: string) => [
    'Exhibition-Register',
    exhibitionType,
    exhibitTitle,
  ],
};

export const useExhibitionRegisterMutation = ({
  exhibitionType,
  exhibitTitle,
  onSuccess,
  onError,
}: ExhibitionRegisterMutationProps) => {
  return useMutation({
    mutationKey: EXHIBITION_MUTATION_KEY.register(exhibitionType, exhibitTitle),
    mutationFn: (exhibitionFormData: FormData) =>
      registerExhibition(exhibitionFormData),
    onSuccess: () => {
      onSuccess();
    },
    onError: (error) => {
      onError(error);
    },
  });
};
