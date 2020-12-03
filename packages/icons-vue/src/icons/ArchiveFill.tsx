// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ArchiveFillSvg from '@airclass/icons-svg/lib/asn/ArchiveFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ArchiveFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArchiveFillSvg}></AntdIcon>;
};

ArchiveFill.displayName = 'ArchiveFill';
ArchiveFill.inheritAttrs = false;
export default ArchiveFill;