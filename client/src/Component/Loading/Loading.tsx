const Loading = ({ isLoading }: any) => {
  if (isLoading) {
    return <>{isLoading && <>Loading...</>}</>;
  }
};

export default Loading;
