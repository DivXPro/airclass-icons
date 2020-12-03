// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import EarthLineSvg from '@airclass/icons-svg/lib/asn/EarthLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EarthLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EarthLineSvg}></AntdIcon>;
};

EarthLine.displayName = 'EarthLine';
EarthLine.inheritAttrs = false;
export default EarthLine;