// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CloudyLineSvg from '@airclass/icons-svg/lib/asn/CloudyLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CloudyLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudyLineSvg}></AntdIcon>;
};

CloudyLine.displayName = 'CloudyLine';
CloudyLine.inheritAttrs = false;
export default CloudyLine;