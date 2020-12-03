// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileCopyFillSvg from '@airclass/icons-svg/lib/asn/FileCopyFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileCopyFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileCopyFillSvg}></AntdIcon>;
};

FileCopyFill.displayName = 'FileCopyFill';
FileCopyFill.inheritAttrs = false;
export default FileCopyFill;