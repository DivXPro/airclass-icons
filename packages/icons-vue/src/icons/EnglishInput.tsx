// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import EnglishInputSvg from '@airclass/icons-svg/lib/asn/EnglishInput';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EnglishInput = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EnglishInputSvg}></AntdIcon>;
};

EnglishInput.displayName = 'EnglishInput';
EnglishInput.inheritAttrs = false;
export default EnglishInput;