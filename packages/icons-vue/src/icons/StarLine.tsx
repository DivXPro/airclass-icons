// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import StarLineSvg from '@airclass/icons-svg/lib/asn/StarLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StarLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StarLineSvg}></AntdIcon>;
};

StarLine.displayName = 'StarLine';
StarLine.inheritAttrs = false;
export default StarLine;