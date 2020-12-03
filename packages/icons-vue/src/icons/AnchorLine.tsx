// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AnchorLineSvg from '@airclass/icons-svg/lib/asn/AnchorLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AnchorLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AnchorLineSvg}></AntdIcon>;
};

AnchorLine.displayName = 'AnchorLine';
AnchorLine.inheritAttrs = false;
export default AnchorLine;