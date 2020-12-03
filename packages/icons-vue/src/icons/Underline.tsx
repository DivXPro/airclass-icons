// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UnderlineSvg from '@airclass/icons-svg/lib/asn/Underline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Underline = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UnderlineSvg}></AntdIcon>;
};

Underline.displayName = 'Underline';
Underline.inheritAttrs = false;
export default Underline;