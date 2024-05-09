export type LoginSubmit = {
  onLoginSubmit: (
    e: React.FormEvent,
    data: { email: string; password: string },
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    setPassword: React.Dispatch<React.SetStateAction<string>>
  ) => void;
};

export type User = {
  cars: string[];
  email: string;
  username: string;
  _id: string;
};
