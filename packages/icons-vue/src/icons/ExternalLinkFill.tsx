// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ExternalLinkFillSvg from '@airclass/icons-svg/lib/asn/ExternalLinkFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ExternalLinkFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ExternalLinkFillSvg}></AntdIcon>;
};

ExternalLinkFill.displayName = 'ExternalLinkFill';
ExternalLinkFill.inheritAttrs = false;
export default ExternalLinkFill;