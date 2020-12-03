// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SkullLineSvg from '@airclass/icons-svg/lib/asn/SkullLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SkullLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SkullLineSvg}></AntdIcon>;
};

SkullLine.displayName = 'SkullLine';
SkullLine.inheritAttrs = false;
export default SkullLine;