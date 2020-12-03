// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DropFillSvg from '@airclass/icons-svg/lib/asn/DropFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DropFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DropFillSvg}></AntdIcon>;
};

DropFill.displayName = 'DropFill';
DropFill.inheritAttrs = false;
export default DropFill;