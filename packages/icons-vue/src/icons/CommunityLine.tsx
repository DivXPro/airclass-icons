// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CommunityLineSvg from '@airclass/icons-svg/lib/asn/CommunityLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CommunityLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CommunityLineSvg}></AntdIcon>;
};

CommunityLine.displayName = 'CommunityLine';
CommunityLine.inheritAttrs = false;
export default CommunityLine;