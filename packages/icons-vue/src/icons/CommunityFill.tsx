// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CommunityFillSvg from '@airclass/icons-svg/lib/asn/CommunityFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CommunityFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CommunityFillSvg}></AntdIcon>;
};

CommunityFill.displayName = 'CommunityFill';
CommunityFill.inheritAttrs = false;
export default CommunityFill;