// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SnapchatFillSvg from '@airclass/icons-svg/lib/asn/SnapchatFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SnapchatFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SnapchatFillSvg}></AntdIcon>;
};

SnapchatFill.displayName = 'SnapchatFill';
SnapchatFill.inheritAttrs = false;
export default SnapchatFill;