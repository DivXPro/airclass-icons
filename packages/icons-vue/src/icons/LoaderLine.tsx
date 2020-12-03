// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LoaderLineSvg from '@airclass/icons-svg/lib/asn/LoaderLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LoaderLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LoaderLineSvg}></AntdIcon>;
};

LoaderLine.displayName = 'LoaderLine';
LoaderLine.inheritAttrs = false;
export default LoaderLine;