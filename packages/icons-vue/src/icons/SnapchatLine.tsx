// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SnapchatLineSvg from '@airclass/icons-svg/lib/asn/SnapchatLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SnapchatLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SnapchatLineSvg}></AntdIcon>;
};

SnapchatLine.displayName = 'SnapchatLine';
SnapchatLine.inheritAttrs = false;
export default SnapchatLine;