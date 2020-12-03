// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RocketLineSvg from '@airclass/icons-svg/lib/asn/RocketLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RocketLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RocketLineSvg}></AntdIcon>;
};

RocketLine.displayName = 'RocketLine';
RocketLine.inheritAttrs = false;
export default RocketLine;