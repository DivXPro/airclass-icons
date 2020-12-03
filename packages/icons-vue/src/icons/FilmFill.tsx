// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FilmFillSvg from '@airclass/icons-svg/lib/asn/FilmFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FilmFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilmFillSvg}></AntdIcon>;
};

FilmFill.displayName = 'FilmFill';
FilmFill.inheritAttrs = false;
export default FilmFill;