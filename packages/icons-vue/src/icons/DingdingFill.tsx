// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DingdingFillSvg from '@airclass/icons-svg/lib/asn/DingdingFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DingdingFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DingdingFillSvg}></AntdIcon>;
};

DingdingFill.displayName = 'DingdingFill';
DingdingFill.inheritAttrs = false;
export default DingdingFill;