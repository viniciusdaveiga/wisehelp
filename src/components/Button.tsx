import { Button as ButtonNativeComponent, IButtonProps, Heading } from 'native-base'

type Props = IButtonProps & {
  title: string;
}
export function Button({ title, ...rest }: Props){
  return(
    <ButtonNativeComponent
      bg="green.700"
      h={14}
      fontSize="sm"
      rounded="lg"
      _pressed={{ bg: "green.500" }}
      {...rest}
    >
      <Heading color="white" fontSize="sm">
        {title}
      </Heading>
    </ButtonNativeComponent>
  );
}