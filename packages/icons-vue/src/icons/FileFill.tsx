// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileFillSvg from '@airclass/icons-svg/lib/asn/FileFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileFillSvg}></AntdIcon>;
};

FileFill.displayName = 'FileFill';
FileFill.inheritAttrs = false;
export default FileFill;