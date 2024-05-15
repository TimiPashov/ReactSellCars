export type LoginSubmit = {
  onLoginSubmit: (
    e: React.FormEvent,
    data: { email: string; password: string },
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
    setError: React.Dispatch<React.SetStateAction<{ error: string }>>
  ) => void;
};

export type RegisterSubmit = {
  onRegisterSubmit: (
    e: React.FormEvent,
    data: {
      userName: string;
      email: string;
      password: string;
      rePassword: string;
    },
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
    setRePassword: React.Dispatch<React.SetStateAction<string>>,
    setError: React.Dispatch<React.SetStateAction<{ error: string }>>
  ) => void;
};

export type User = {
  cars: string[];
  email: string;
  username: string;
  _id: string;
};
