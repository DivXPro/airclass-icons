// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UmbrellaLineSvg from '@airclass/icons-svg/lib/asn/UmbrellaLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UmbrellaLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UmbrellaLineSvg}></AntdIcon>;
};

UmbrellaLine.displayName = 'UmbrellaLine';
UmbrellaLine.inheritAttrs = false;
export default UmbrellaLine;