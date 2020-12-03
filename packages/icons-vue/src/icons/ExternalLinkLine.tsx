// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ExternalLinkLineSvg from '@airclass/icons-svg/lib/asn/ExternalLinkLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ExternalLinkLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ExternalLinkLineSvg}></AntdIcon>;
};

ExternalLinkLine.displayName = 'ExternalLinkLine';
ExternalLinkLine.inheritAttrs = false;
export default ExternalLinkLine;