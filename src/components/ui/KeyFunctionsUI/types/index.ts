export type KeyFunctionsUIProps = {
  keyFunctions: KeyFunctionUI[];
  isLoading: boolean;
  selectedKeyFunction: string | null;
  onSelectKeyFunction: (id: string) => void;
};

export type KeyFunctionUI = {
  id: string;
  name: string;
  icon: string;
  count: number;
};
