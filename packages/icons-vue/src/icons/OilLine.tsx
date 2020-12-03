// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import OilLineSvg from '@airclass/icons-svg/lib/asn/OilLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OilLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={OilLineSvg}></AntdIcon>;
};

OilLine.displayName = 'OilLine';
OilLine.inheritAttrs = false;
export default OilLine;