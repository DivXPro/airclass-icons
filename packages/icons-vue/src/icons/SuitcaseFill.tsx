// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SuitcaseFillSvg from '@airclass/icons-svg/lib/asn/SuitcaseFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SuitcaseFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SuitcaseFillSvg}></AntdIcon>;
};

SuitcaseFill.displayName = 'SuitcaseFill';
SuitcaseFill.inheritAttrs = false;
export default SuitcaseFill;