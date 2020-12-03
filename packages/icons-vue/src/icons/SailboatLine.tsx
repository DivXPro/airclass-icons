// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SailboatLineSvg from '@airclass/icons-svg/lib/asn/SailboatLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SailboatLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SailboatLineSvg}></AntdIcon>;
};

SailboatLine.displayName = 'SailboatLine';
SailboatLine.inheritAttrs = false;
export default SailboatLine;