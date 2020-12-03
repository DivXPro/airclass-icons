// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TextWrapSvg from '@airclass/icons-svg/lib/asn/TextWrap';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TextWrap = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextWrapSvg}></AntdIcon>;
};

TextWrap.displayName = 'TextWrap';
TextWrap.inheritAttrs = false;
export default TextWrap;