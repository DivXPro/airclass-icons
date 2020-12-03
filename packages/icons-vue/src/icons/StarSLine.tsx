// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import StarSLineSvg from '@airclass/icons-svg/lib/asn/StarSLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StarSLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StarSLineSvg}></AntdIcon>;
};

StarSLine.displayName = 'StarSLine';
StarSLine.inheritAttrs = false;
export default StarSLine;