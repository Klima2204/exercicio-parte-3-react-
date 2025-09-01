'use client';
import { useForm } from 'react-hook-form';
import { Box, TextField, Button, FormControlLabel, Checkbox, Typography } from '@mui/material';

export default function FormularioContato() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Dados do formulário:', data);
    alert(`Mensagem enviada!\n\n${JSON.stringify(data, null, 2)}`);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ maxWidth: 500, margin: 'auto', mt: 4 }}>
      <Typography variant="h5" gutterBottom>📬 Fale Conosco</Typography>

      <TextField
        label="E-mail"
        fullWidth
        margin="normal"
        {...register('email', { required: 'E-mail é obrigatório' })}
        error={!!errors.email}
        helperText={errors.email?.message}
      />

      <TextField
        label="Assunto"
        fullWidth
        margin="normal"
        {...register('assunto', { required: 'Assunto é obrigatório' })}
        error={!!errors.assunto}
        helperText={errors.assunto?.message}
      />

      <TextField
        label="Mensagem"
        fullWidth
        multiline
        rows={4}
        margin="normal"
        {...register('mensagem', { required: 'Mensagem é obrigatória' })}
        error={!!errors.mensagem}
        helperText={errors.mensagem?.message}
      />

      <FormControlLabel
        control={<Checkbox {...register('urgente')} />}
        label="Marcar como urgente"
      />

      <Button type="submit" variant="contained" sx={{ mt: 2 }}>Enviar</Button>
    </Box>
  );
}
