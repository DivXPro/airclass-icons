// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AnchorFillSvg from '@airclass/icons-svg/lib/asn/AnchorFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AnchorFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AnchorFillSvg}></AntdIcon>;
};

AnchorFill.displayName = 'AnchorFill';
AnchorFill.inheritAttrs = false;
export default AnchorFill;