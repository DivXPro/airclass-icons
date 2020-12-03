// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LinksLineSvg from '@airclass/icons-svg/lib/asn/LinksLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LinksLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LinksLineSvg}></AntdIcon>;
};

LinksLine.displayName = 'LinksLine';
LinksLine.inheritAttrs = false;
export default LinksLine;