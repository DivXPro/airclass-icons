// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MoreLineSvg from '@airclass/icons-svg/lib/asn/MoreLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MoreLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoreLineSvg}></AntdIcon>;
};

MoreLine.displayName = 'MoreLine';
MoreLine.inheritAttrs = false;
export default MoreLine;