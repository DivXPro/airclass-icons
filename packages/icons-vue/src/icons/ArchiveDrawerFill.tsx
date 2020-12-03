// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ArchiveDrawerFillSvg from '@airclass/icons-svg/lib/asn/ArchiveDrawerFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ArchiveDrawerFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArchiveDrawerFillSvg}></AntdIcon>;
};

ArchiveDrawerFill.displayName = 'ArchiveDrawerFill';
ArchiveDrawerFill.inheritAttrs = false;
export default ArchiveDrawerFill;