// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RainyLineSvg from '@airclass/icons-svg/lib/asn/RainyLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RainyLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RainyLineSvg}></AntdIcon>;
};

RainyLine.displayName = 'RainyLine';
RainyLine.inheritAttrs = false;
export default RainyLine;