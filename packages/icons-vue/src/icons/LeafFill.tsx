// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LeafFillSvg from '@airclass/icons-svg/lib/asn/LeafFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LeafFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LeafFillSvg}></AntdIcon>;
};

LeafFill.displayName = 'LeafFill';
LeafFill.inheritAttrs = false;
export default LeafFill;