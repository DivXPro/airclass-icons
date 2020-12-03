// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SkipBackFillSvg from '@airclass/icons-svg/lib/asn/SkipBackFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SkipBackFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SkipBackFillSvg}></AntdIcon>;
};

SkipBackFill.displayName = 'SkipBackFill';
SkipBackFill.inheritAttrs = false;
export default SkipBackFill;