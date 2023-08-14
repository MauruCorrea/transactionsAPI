const create = require('../useCases/createTransactionUseCase');

async function createTransaction(request, response) {
  const body = request.body;

  if (!body.title || !body.type || !body.amount) {
    return response.status(400).json({ error: 'missing field title, type or amount' });
  }
  const result = await create(body);

  if (!result.success) {
    return response.status(result.code).json({ error: result.message });
  }

  return response.status(201).json(body);
}

module.exports = { createTransaction };
