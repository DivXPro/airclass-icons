// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BoxingFillSvg from '@airclass/icons-svg/lib/asn/BoxingFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BoxingFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BoxingFillSvg}></AntdIcon>;
};

BoxingFill.displayName = 'BoxingFill';
BoxingFill.inheritAttrs = false;
export default BoxingFill;