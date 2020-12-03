// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ContrastFillSvg from '@airclass/icons-svg/lib/asn/ContrastFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ContrastFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ContrastFillSvg}></AntdIcon>;
};

ContrastFill.displayName = 'ContrastFill';
ContrastFill.inheritAttrs = false;
export default ContrastFill;