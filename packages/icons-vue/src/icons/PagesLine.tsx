// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PagesLineSvg from '@airclass/icons-svg/lib/asn/PagesLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PagesLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PagesLineSvg}></AntdIcon>;
};

PagesLine.displayName = 'PagesLine';
PagesLine.inheritAttrs = false;
export default PagesLine;