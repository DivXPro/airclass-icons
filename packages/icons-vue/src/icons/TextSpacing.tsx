// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TextSpacingSvg from '@airclass/icons-svg/lib/asn/TextSpacing';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TextSpacing = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextSpacingSvg}></AntdIcon>;
};

TextSpacing.displayName = 'TextSpacing';
TextSpacing.inheritAttrs = false;
export default TextSpacing;